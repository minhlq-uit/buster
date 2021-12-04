import React from 'react';
import apiConfig from '../../../api/apiConfig';
import "./castitem.scss"
const CastItem = (props) => {
    const { cast } = props;
    const background = apiConfig.w500Image(cast.profile_path);
    return (
        <div className="cast-container">
            <div className="cast-item">
                <img
                    src={background}
                    alt=""
                />
                <div className="cast-info">
                    <div>
                        <h3>{cast.name}</h3>
                        <h4>
                            {cast.character}
                        </h4>
                    </div>
                </div>
            </div>
            <div className="mask" />
        </div>
    );
};

export default CastItem;