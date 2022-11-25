import React from 'react';

const AdminProductsView = (props) => {
    
    return (
        <>
            <form >
                <h3>Nuevo Producto</h3>
                <label htmlFor="title">
                    <input type="text" name='title' ref={props.title}/>
                </label>
                <label htmlFor="img-link">
                    <input type="text" name="img-link" ref={props.imgLink}/>
                </label>
                <label htmlFor="price">
                    <input type="number" name="price"ref={props.price}/>
                </label>
                <label htmlFor="type">
                    <input type="text" name="type" ref={props.type}/>
                </label>

                <button onClick={(e) => {props.addNewProduct(e)}}>AÑADIR</button>
            </form>
            <div className="rep-prod-cont">
            {props.products !== null ? props.products.map((prod)=>{
                return(
                <div className="rep-prod" key={prod._id}>
                    <span>{prod.title}</span>
                    <span id="price" onClick={(e)=>{props.editValue(e)}}>{prod.price}</span>
                    <span>{prod.type}</span>
                    <span id="id" onClick={(e)=>{props.removeFromDB(e.target.textContent)}}>{prod._id}</span>
                </div>)
            }) : <span>Añade productos a tu tienda</span>}
            </div>
            </>
    );
}

export default AdminProductsView;
