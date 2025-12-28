import React, { Component } from 'react'
//rce //copy-paste from card of getbootstrap.com
export class NewsItem extends Component {

  render() {
    let {title,description,imageurl,newsurl,author,date,source} = this.props
    return (
      <div>
        <div className="card"> {/*style={{width: "18rem"}}>*/}
            <img src={imageurl?imageurl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8watGkfA9TOtdzR9JvkXzaDEO5s3XW0FILA&s"} className="card-img-top" alt="news" style={{height: "180px",objectFit: "cover"}}/>
            <div className="card-body">
              <span className="badge rounded-pill text-bg-danger">{source}</span>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}...</p>
                <p className="card-text"><small className="text-body-secondary">By {author} on {date}</small></p>
                <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sm btn-primary">Read More</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem
