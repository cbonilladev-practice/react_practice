import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            destination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? 
            this.setState({
                [name]: checked
            })
        :
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div>
                <main>
                    <form>
                        <input 
                            name="firstName" 
                            value={this.state.firstName} 
                            onChange={this.handleChange} 
                            placeholder="First Name"></input><br/>
                        <input 
                            name="lastName" 
                            value={this.state.lastName} 
                            onChange={this.handleChange} 
                            placeholder="Last Name"></input><br/>
                        <input 
                            name="age" 
                            value={this.state.age} 
                            onChange={this.handleChange} 
                            placeholder="Age"></input><br/>

                        <label>
                            <input 
                                type="radio" 
                                name="gender"
                                value="male"
                                checked={this.state.gender === "male"}
                                onChange={this.handleChange}/> Male
                        </label>
                        <label>
                            <input 
                                type="radio" 
                                name="gender"
                                value="female"
                                checked={this.state.gender === "female"}
                                onChange={this.handleChange}/> Female
                        </label>
                        <br/>
                        <select 
                            value={this.state.destination} 
                            name="destination" 
                            onChange={this.handleChange}>
                                <option value="">-- Please Choose a destination --</option>
                                <option value="germany">germany</option>
                                <option value="united states">united states</option>
                                <option value="france">france</option>
                                <option value="australia">australia</option>
                        </select>
                        <br/>
                        <label>
                        <input 
                            type="checkbox"
                            name="isVegan"
                            onChange={this.handleChange}
                            checked={this.state.isVegan}
                        /> Vegan?
                    </label>
                    <br />
                        <label>
                            <input
                                type="checkbox"
                                name="isKosher"
                                onChange={this.handleChange}
                                checked={this.state.isKosher}/> Kosher?
                        </label>
                        <br/>
                        <label>
                            <input
                                type="checkbox"
                                name="isLactoseFree"
                                onChange={this.handleChange}
                                checked={this.state.isLactoseFree}/> Lactose Free?
                        </label>
                        <br/>
                        <button>Submit</button>
                    </form>
                    <hr />
                    <h2>Entered information:</h2>
                    <p> Your name: {this.state.firstName} {this.state.lastName} </p>
                    <p> Your age: {this.state.age} </p>
                    <p> Your gender: {this.state.gender} </p>
                    <p> Your destination: {this.state.destination} </p>
                    <p> Your dietary restriction(s): </p>
                    <p>Vegan: {this.state.isVegan ? "Yes" : "No"}</p>
                    <p>Kosher: {this.state.isKosher ? "Yes" : "No"}</p>
                    <p>Lactose Free: {this.state.isLactoseFree ? "Yes" : "No"}</p>
                </main>
            </div>
        )
    }
}

export default App