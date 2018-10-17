import React from "react";

const styles = {
    image:{
        width: "150px",
        height: "150px",
        padding: "10px",
        borderStyle:"solid",
        borderColor:"#585d68",
        borderWidh:"50px",
        marginBottom:"20px",
        backgroundColor: "#ffcce8",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    }
}

const ImageCard = props => <img onClick={() => props.handleClick(props.id)}value={props.id}src={props.image} alt="catImage1" style={styles.image}></img>


export default ImageCard;