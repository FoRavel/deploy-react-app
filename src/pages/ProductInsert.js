import React, { Component } from 'react'
import api from '../api'

class ProductInsert extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pictureUrl: '',
            textUrl: '',
            shopUrl: '',
            type: '',
            detailsUrl: ''
        }

    }
    handleChangeInputPictureUrl = async event => {
        const pictureUrl = event.target.value
        this.setState({ pictureUrl })
    }
    handleChangeInputTextUrl = async event => {
        const textUrl = event.target.value
        this.setState({ textUrl })
    }
    handleChangeInputShopUrl = async event => {
        const shopUrl = event.target.value
        this.setState({ shopUrl })
    }
    handleChangeInputType = async event => {
        const type = event.target.value
        this.setState({ type })
    }
    handleChangeInputDetailsUrl = async event => {
        const detailsUrl = event.target.value
        this.setState({ detailsUrl })
    }
    handleInsertProduct = async () => {
        const { pictureUrl, textUrl, shopUrl, type, detailsUrl } = this.state
        const payload = { pictureUrl, textUrl, shopUrl, type, detailsUrl}

        await api.insertProduct(payload).then(res => {
            window.alert(`Product inserted successfully`)
            this.setState({
                pictureUrl: '',
                textUrl: '',
                shopUrl: '',
                type: '',
                detailsUrl: ''
            })
        })
    }

    render() {
        const { pictureUrl, textUrl, shopUrl, type, detailsUrl } = this.state
        return (
            <div>   
                <label htmlFor="picture-url">Url de l'image</label>
                <input type="text" name="picture-url" value={pictureUrl} id="picture-url" onChange={this.handleChangeInputPictureUrl} />
                <label htmlFor="text-url">Texte de l'URL</label>
                <input type="text" name="text-url" value={textUrl} id="text-url" placeholder="Un site génial" onChange={this.handleChangeInputTextUrl} />
                <label htmlFor="shop-url">URL </label>
                <input type="text" name="shop-url" value={shopUrl} id="shop-url" placeholder="www.example.com"onChange={this.handleChangeInputShopUrl} />
                <label htmlFor="type">Type</label>
                <input type="text" name="type" value={type}id="type" placeholder="Protection par voie aérienne" onChange={this.handleChangeInputType} />
                <label htmlFor="details-url">Lien pour en savoir plus sur le produit</label>
                <input type="text" name="details-url" value={detailsUrl} id="details-url" onChange={this.handleChangeInputDetailsUrl} />
                <input type="submit"  className="btn" value="Créer" onClick={this.handleInsertProduct} />
            </div>
        )
    }
}

export default ProductInsert