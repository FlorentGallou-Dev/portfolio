import React from "react";
import Axios from 'axios';

//GET THE PROPS FROM AddProject using this.props.technologies from line 24 of AddProject.js

class Technology extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            loaded: false,
            error: false,
            data: null
        }
    }

    //Function to create technologies DOM elements from the technologie API
    createDOMTechnologyElementList = (technoFromAPI) => {
        //To store the DOM element list
        let listOfElementsFromProjectTechnologies = [];
            //Look of each technologie in the technologie API
            Object.keys(technoFromAPI).forEach(key2 => {
                    //inject the technology DOM element with the right informations from the technologies API
                    listOfElementsFromProjectTechnologies.push(
                        <div className="technoBox p-2">
                            <div className="projectCard bg-lightPlum p-5">
                                <div className="fs-1 p-3">
                                    <i className={`${technoFromAPI[key2].icon} orangeText`} aria-hidden="true"></i>
                                </div>
                                <div>
                                    <h3 className="lightText p-3">{technoFromAPI[key2].name}</h3>
                                </div>
                            </div>
                        </div>
                    );
            });
        return listOfElementsFromProjectTechnologies;
    }

    // http request with axios
    componentDidMount(){
        // Make a request to the api
        Axios.get("/portfolio/technologies.json")
        // handle successfull response
        .then( (response) => {
            //Manage respônse
            this.setState({
                loaded: true,
                data: response.data, //Fill data with the raw datas from response
            });
        })
        // handle response errors
        .catch( (error) => {
            this.setState({
                loaded: true,
                error: error
            });
        });
    }

    //Render html elements sent to the parent app
    render(){
        //Handle http state loaded
        if(this.state.loaded){
            //Handle http state loaded but with an error
            if(this.state.error){
                return(
                    <h3 className="text-white bg-danger p-5 text-center">une erreur "{this.state.error.message}" est survenue !</h3>
                );
            }
            //Handle http state loaded without and error
            return(
                // Inject this element in its parent AddProject
                <div className="bg-darkPlum">
                    <section className="container-xxl pb-5">
                        <div>
                            <h1 className="py-5 text-center orangeText text-uppercase">Techniques et technologies que j'utilise</h1>
                        </div>
                        <div className="row flex-row flex-wrap justify-content-center text-center">
                            {this.createDOMTechnologyElementList(this.state.data)} 
                        </div>
                    </section>
                </div>
            );
        }
        //Handle http state not loaded yet
        return (
            <div>
                <h2 className="text-white bg-yellow p-5 text-center jediFont">Données en cours de chargements</h2>
            </div>
        );
    }
}

export default Technology;