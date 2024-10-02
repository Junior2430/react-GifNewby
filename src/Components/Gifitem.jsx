
export const Gifitem = ({ title, url }) => {

    return (
        <div className="card">
            {/* Usa 'url' en el src del img */}
            <img src={url} alt={title} />
            {/* Usa 'title' para el texto descriptivo */}
            <p>{title}</p>
        </div>
    );
}
