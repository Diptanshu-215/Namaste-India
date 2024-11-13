import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const FrontPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const video = document.getElementById('bgVideo');

        if (video) {
            video.addEventListener('ended', function() {
                video.pause();
            });
        }

        return () => {
            if (video) {
                video.removeEventListener('ended', function() {
                    video.pause();
                });
            }
        };
    }, []);

    const handleExplore = () => {
        navigate('/traditional-arts');
    };

    return (
        <div>
            <div className="video-background">
                <video autoPlay muted id="bgVideo">
                    <source src="/Test.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="nav-bar">
                <div className="namaste">
                    <p className="India">
                        <span className="N">N</span>AMASTE <span className="I">I</span>NDIA
                    </p>
                </div>  
                <div className="menu">
                    <p className="Map">Map</p>
                    <p className="Art">Art</p>
                    <p className="Calendar">Calendar</p>
                    <p className="Quiz">Quizzes</p>
                    <p className="Cuisines">Cuisines</p>
                </div>
            </div>
            <div className="main">
                <div className="discover">
                    <p className="discover-text">Discover the spirit of India</p>
                </div>
                <div className="embark">
                    <p className="embark-text">Embark on a journey through the vibrant festivals, timeless traditions, and diverse cultures of India.</p>
                </div>
            </div>
            <div className="button" onClick={handleExplore}>
                <p className="explore">Explore More</p>
            </div>
        </div>
    );
};

export default FrontPage;