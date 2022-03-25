import './tile.css'

const Tile = ({ reverse, img, header, content }) => {

    let containerClass;

    if(reverse == true){
        containerClass = "tile-container tile-container-reverse"
    } else {
        containerClass = "tile-container"
    }

    return(
        <div class={containerClass}>
            <div class="tile-image-container">
                <img src={img} height="500" width="500" alt="image-container"/>
            </div>
            <div class="tile-text-container">
                <h1 class="tile-header">
                    {header}
                </h1>
                <p class="tile-content">
                    { content }
                </p>
            </div>
        </div>
    )

}

export default Tile;