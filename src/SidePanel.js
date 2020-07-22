import React from "react";
import "bulma/css/bulma.css";
import QRCode from 'qrcode.react';

export class SidePanel extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showQR: false }
        this.handleQR = this.handleQR.bind(this);
    }
    handleQR() {
        this.setState({ showQR: !(this.state.showQR) })
    }
    render() {
        return (
            <div>
                <button class="button " onClick={this.handleQR}>Generate QR </button>
                <div className={this.state.showQR ? "modal is-active" : "modal" }>
                    <div className="modal-background"></div>
                    <div className="modal-content">
                    <QRCode value={window.location.href} size={256} />
                    </div>
                    <button onClick={this.handleQR} className="modal-close is-large" aria-label="close"></button>
                </div>
            </div>
        );
    }
} 