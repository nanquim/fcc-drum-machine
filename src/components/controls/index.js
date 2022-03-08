
function Controls(){
    return (
        <div id="controls-container">
            <div id="power">
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>
            </div>
            <p id="display"></p> 
            <div id="volume">
                <input type="range" min="1" max="100" value="50" class="slider" id="myRange" />    
            </div> 
            <div id="bank">
                <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                </label>    
            </div>  
        </div>
    )
}

export default Controls;
