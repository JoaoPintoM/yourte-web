import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'

const CLOUDINARY_UPLOAD_PRESET = 'teststagounet'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/stagounet/upload'

class UploadComponent extends Component {
  constructor (props) {
    super(props)

    this.state = {
      uploadedFiles: [],
      uploadedUrls: []
    }
  }

  onImageDrop (files) {
    this.setState({ uploadedFiles: files })

    const uploads = files.map(f => this.handleImageUploadPromise(f))
    Promise.all(uploads).then((result) => {
      const urls = result.map(r => { // eslint-disable-line
        if (r.body.secure_url !== '') {
          return r.body.secure_url
        }
      })

      this.setState({ uploadedFiles: [] })
      this.setState({ uploadedUrls: urls })
      this.props.onNewImages(urls)
    }).catch(e => {
      this.setState({ uploadedFiles: [] })
      alert('files not upload plz retry')
    })
  }

  handleImageUploadPromise (file) {
    return request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file)
  }

  render () {
    const imgList = this.state.uploadedFiles.map((f) => {
      return <img key={f.name} role="presentation" src={f.preview} style={{width: '150px'}}/>
    })

    const uploadedList = this.state.uploadedUrls.map((u) => {
      return <img key={u} role="presentation" src={u} style={{width: '200px'}}/>
    })

    return (
      <form>
        <div className="FileUpload">
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            accept="image/*">
            <div>Drop an image or click to select a file to upload.</div>
          </Dropzone>
          <br />
        </div>

        <div>{imgList}</div>

        <h1>{'uploaded:'}</h1>
        <div>{uploadedList}</div>
      </form>
    )
  }
}

export default UploadComponent
