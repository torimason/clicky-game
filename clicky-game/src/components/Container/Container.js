import React from "react";

const styles = {
    gameContainer : {
        width:"800px",
        marginTop: "40px",
        marginLeft: "auto",
        marginRight:"auto"
    }
}

const Container = props => <div style={styles.gameContainer} className = "game-container container">{props.children}
</div>

export default Container;