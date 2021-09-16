import React from 'react';
import ReactLoading, {LoadingType} from 'react-loading';

const Loader = (type: LoadingType, color: string, message: string) => {
    return (
        <div className="contentWrap">
            <div style={{position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                <h2>{"Hospital Playlist"}</h2>
                <ReactLoading type={"spin"} color={'red'} height={'80%'} width={'80%'}/></div>
        </div>
    );
}

export default Loader;

