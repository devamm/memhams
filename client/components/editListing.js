import React from 'react';
import axios from 'axios';
import './modal.css';

class EditListing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: this.props.listing.name || "",
            price: this.props.listing.price || "",
            description: this.props.listing.description || "",
            imgurl: this.props.listing.imgurl || "",
            numError: false,
            empError: false,
            empError1: false
        }

        this.editListing = this.editListing.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    closeModal(e){
        e.preventDefault();
        //reset any entered text to value from listing
        this.setState({
            name: this.props.listing.name,
            price: this.props.listing.price,
            description: this.props.listing.description,
            imgurl: this.props.listing.imgurl
        })
        this.props.toggleModal(e);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    async editListing(e){
        e.preventDefault();
        let numError = false;
        let empError = false;
        let empError1 = false;
        
        //validate number inputs
        try{
            var price = parseInt(this.state.price);
            if(!Number.isSafeInteger(price) || price <= 0){
                //number is not an integer
                numError = true;
            }
        } catch(e) {
            //value is not a number
            numError = true;
        }

        //validate text input
        if(this.state.name == ""){
            empError = true;
        }
        if(this.state.desc == ""){
            empError1 = true;
        }
        var imgurl = this.state.imgurl;
        if(imgurl == ""){
            imgurl = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/A_blank_black_picture.jpg/1536px-A_blank_black_picture.jpg";
        }

        if(numError == true || empError == true || empError1 == true){
            this.setState({numError, empError, empError1});
        } else {
            //perform put operation
           try{
            const res = await axios.put(`/api/listings/${this.props.listing.id}`, {
                name: this.state.name,
                description: this.state.description,
                price,
                imgurl,
                sold: false
            });

            this.props.toggleModal(e);
            
            this.props.edited();
            this.props.history.push(`/listing${this.props.listing.id}`);
           } catch(err){
               console.log(err);
           }
        }
    }

    render(){
        return (
            <div className="modal">
               <div className="modal-inner">
               <form onSubmit={this.editListing}>
                    <label for="name">Name</label>
                    <p className="error" style={{display: `${this.state.empError == true? "": 'none'}`}}>Input can't be empty</p>
                    <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name}  />

                    <label for="price">Price</label><br/>
                    <p className="error" style={{display: `${this.state.numError == true? "": 'none'}`}}>Price must be a valid number</p>
                    <input type="text" name="price" onChange={this.handleChange} value={this.state.price} />

                     <label for="descriptioj">Description</label>
                     <p className="error" style={{display: `${this.state.empError1 == true? "": 'none'}`}}>Input can't be empty</p>
                     <br/>
                    <input type="text" name="description" onChange={this.handleChange} value={this.state.description} />

                    <label for="imgurl">Image URL</label>
                     <br/>
                    <input type="text" name="imgurl" onChange={this.handleChange} value={this.state.imgurl} />

                    
                
                    <input type="submit" value="Submit"/>
                    <button onClick={this.closeModal}>Close</button>
                </form>
               
               </div>
             
            </div>
        )
    }
}

export default EditListing;