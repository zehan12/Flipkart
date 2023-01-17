const CardGrid = ({ card }) => {
    return (
        <div className="flex justify-evenly">
            {
                card.map((img) => <img className="my-3" width="500px" src={img} key={img + ""} />)
            }
        </div>
    ) 
}

export default CardGrid;