import React from 'react'

const Progress_bar = ({ bgcolor, progress, total, height }) => {

    const Parentdiv = {
        height: '46px',
        width: '70',
        backgroundColor: 'whitesmoke',
        borderRadius: 10,

        margin: 0,
        border: '3px solid black',
    }

    const Childdiv = {
        height: '40px',
        width: progress / total > 1 ? '100%' : `${progress * 100 / total}%`,
        backgroundColor: bgcolor,
        borderRadius: 10,
        textAlign: 'right',
        paddingTop: 2,
    }

    const progresstext = {
        padding: 10,
        position: 'relative',
        left: '0%',
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}>{`${progress}/${total}`}</span>
            </div>
        </div>
    )
}

export default Progress_bar;