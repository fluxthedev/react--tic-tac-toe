import React from "react";

export default class Game extends React.Component {
    render() {

        let status;
        status = "Next player: X";
        return (
            <div className="game">
                <div className="game-info">
                    <div>{status}</div>
                </div>
            </div>
        );
    }
}