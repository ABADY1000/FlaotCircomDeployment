import React from "react";

function Top(){
    return (
        <div className="around-text">
            <h1 className="title">
                Floating Circom
            </h1>
            <p className="text">
                A floating point arithmetic implementation on Circom.
            </p>
            <p className="paragraph">
                All operations in this page are done in circom, no java script code is used for any operation, the only usage for JS is to convert numbers from JS type "Number" to a 32bit Float numbers
            </p>
        </div>
    );
}

export default Top;