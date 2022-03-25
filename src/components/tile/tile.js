import './tile.css'

const Tile = ({ reverse, img, alt, header, content }) => {

    return(
        <div class={reverse ? "tile-container tile-container-container" : "tile-container"}>
            <div class="tile-image-container">
                <img src={img} height="500" width="500" alt={alt}/>
            </div>
            <div class="tile-text-container">
                <h1 class="tile-header">
                    {header}
                </h1>
                <p class="tile-content">
                    {content}
                </p>
            </div>
        </div>
    )

}

export default Tile;