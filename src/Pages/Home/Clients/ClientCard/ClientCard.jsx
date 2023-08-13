
const ClientCard = ({ client }) => {
    const { image, name } = client

    return (
        <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
            <img src={image} alt="" className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" />
            <div className="text-center text-cyan-500 font-semibold">
                <h2>{name}</h2>
            </div>
        </div>
    );
};

export default ClientCard;