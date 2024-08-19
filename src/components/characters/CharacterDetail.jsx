import { useParams } from "react-router-dom";


function CharacterDetail() {

    const params = useParams();

    return (
        <div>
            <h2>Pagina de detalle</h2>
            <div className="col2">
                <img src='' alt=''/>
            </div>
            <p>Nombre</p>
            <p>Especie</p>
            <p>Genero</p>
            <p>Casa</p>
            <p>ID: {params.id}</p>

        </div>

    );
}

export default CharacterDetail;