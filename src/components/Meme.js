import React from "react"

function Meme(){
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })
    
    const [allMemes, setAllMemes] = React.useState([])

    function getMemeImage(){
        
        const randomNumber = Math.floor( Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        setMemeImage(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event){
        const {name, value, type} = event.target
        setMemeImage(previousValues=>({
            ...previousValues,
            [name]: value
        }))
    }

    function handleCreateMeme(event){
        event.preventDefault()
    }

    React.useEffect(function(){
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    return(
        <main>
            <div className="meme--form">
                <div className="meme--form--input">
                    <input 
                        type="text" 
                        className="meme--form--inputone" 
                        placeholder="Top Text"
                        onChange={handleChange}
                        name="topText"
                        value={memeImage.topText}
                    />    
                    <input 
                        type="text" 
                        className="meme--form--inputtwo" 
                        placeholder="Bottom Text"
                        onChange={handleChange}
                        name="bottomText"
                        value={memeImage.bottomText}
                    />    
                </div>
                <div className="meme--form--submit">
                    <button 
                        type="submit" 
                        onClick={getMemeImage}
                        onSubmit={handleCreateMeme}
                        className="meme--form--submit-button">
                            Get a new meme image🖼️
                    </button>
                </div>
            </div>
            <div className="meme--form--imagecontainer">
                <img src={memeImage.randomImage} className="meme--form--image"/>
                <h2 className="meme--text top">{memeImage.topText}</h2>
                <h2 className="meme--text bottom">{memeImage.bottomText}</h2>
            </div>
        </main>
    )
}

export default Meme