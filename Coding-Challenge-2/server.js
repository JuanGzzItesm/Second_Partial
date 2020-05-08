const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );

const app = express();


//DELETE ENDPOINT

app.delete('/sports/delete',jsonParser,(req,res)=>{

    let idQ = req.query.id;

    let idBody = req.body.sportId;

     if ( idBody == undefined ){

        res.statusMessage = "MISSING ID IN THE BODY";
        return res.status(406).json({})
    }

     if ( idQ == undefined ){

        res.statusMessage = "MISSING ID IN THE QUERY";
        return res.status(406).json({})
    }

    if ( idQ != idBody){

        res.statusMessage = "ID OF THE BODY AND QUERY DOES NOT MATCH";
        return res.status(409).json({})
    }


    let result = sports.find( (element) => {

        if (element.sportId == idQ){

            return element;
        }
    });

    if (result){

        sports = sports.filter( (element) => {

            if ( result.sportId != element.sportId){
                return element
            }

            sports.splice(idQ,1);
            return res.status(204).json({});
        })
    }else{

        res.statusMessage = "ID DOES NOT EXISTS";
        return res.status(404).json({})

    }

   

});


app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});
