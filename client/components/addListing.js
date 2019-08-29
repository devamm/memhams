import React from 'react';
import axios from 'axios';

class AddListing extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            price: "",
            img: "",
            desc: "",
            numError: false,
            empError: false,
            empError1: false
        }
        
        this.handleChange = this.handleChange.bind(this);
        this.addListing = this.addListing.bind(this);
    }

    handleChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    async addListing(e){
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
        var img = this.state.img;
        if(img == ""){
            img = "default";
        }

        if(numError == true || empError == true || empError1 == true){
            this.setState({numError, empError, empError1});
        } else {
            //perform put operation
           try{
            const res = await axios.post('/api/listings/', {
                name: this.state.name,
                desc: this.state.desc,
                price,
                img,
                sold: false
            });

            this.props.toggleModal(e);
            
            this.props.reload();
            this.props.history.push('/listings');
           } catch(err){
               console.log(err);
           }
        }   
    }

    render(){
        return (
            <div className="modal">
            <div className="modal-inner">
            <form onSubmit={this.addListing}>
                 <label for="name">Name</label>
                 <p className="error" style={{display: `${this.state.empError == true? "": 'none'}`}}>Input can't be empty</p>
                 <input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name}  />

                 <label for="price">Price</label><br/>
                 <p className="error" style={{display: `${this.state.numError == true? "": 'none'}`}}>Price must be a valid number</p>
                 <input type="text" name="price" onChange={this.handleChange} value={this.state.price} />

                  <label for="desc">Description</label>
                  <p className="error" style={{display: `${this.state.empError1 == true? "": 'none'}`}}>Input can't be empty</p>
                  <br/>
                 <input type="text" name="desc" onChange={this.handleChange} value={this.state.desc} />

                 <label for="img">Image URL</label>
                  <br/>
                 <input type="text" name="img" onChange={this.handleChange} value={this.state.img} />

                 
             
                 <input type="submit" value="Submit"/>
                 <button onClick={this.props.toggleModal}>Close</button>
             </form>
            
            </div>
          
         </div>
        )
    }
}

export default AddListing;