import React, { Component } from 'react' // rce
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class NewsForm extends Component {

  static defaultProps = {
        country: "us",
        pagesize:20,
        category:"health"}

  static propTypes = {
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string}
    
  constructor() {//1
    super()
    this.state = {
      articles: [],
      loading: false,
      page:1}}

  async updateNews(){
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=99edb5b43f084a9987ac484bafd21ed4&page=${this.state.page}&pageSize=${this.props.pagesize}`
    this.setState({loading:true})
    let data = await fetch(url)
    let parsed_data = await data.json()
    this.setState({
      articles: parsed_data.articles,
      loading: false,
      totalResults:parsed_data.totalResults})}

  capitalizefirstletter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)}

  async componentDidMount() {//3
    this.updateNews()}

  handlePrevClick = async() => {
    this.setState({page: this.state.page-1})
    this.updateNews()}

  handleNextClick = async() => {
    if (this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)){ // total number of pages = Math.ceil(this.state.totalResults/20)
    }// then nothing. Disable the Next button
    else{
    this.setState({page: this.state.page+1})
    this.updateNews()}}

  render() {//2
    return (
      <div className="container mx-10 my-3">
        <h2 className="my-4" style={{margin:'35px 0px'}}><center>News24Daily - Top{" "}{this.props.category === "general"? "headlines":`${this.capitalizefirstletter(this.props.category)} related headlines`}</center></h2>
        {this.state.loading && <Spinner/>}
        <div className="row my-3">
          {!this.state.loading && this.state.articles.map((element) => (
            <div className="col-md-3" key={element.url}>
              <NewsItem
                title={element.title ? element.title: ""} //element.title.slice(0, 40) : ""
                description={element.description ? element.description.slice(0, 88) : ""}
                imageurl={element.urlToImage}
                newsurl={element.url}
                author={element.author? element.author:"𝘜𝘯𝘬𝘯𝘰𝘸𝘯 𝘈𝘶𝘵𝘩𝘰𝘳"}
                //date={element.publishedAt? element.publishedAt.split("T")[0]:"𝘕𝘰𝘵 𝘈𝘷𝘢𝘪𝘭𝘢𝘣𝘭𝘦"}
                date={element.publishedAt? new Date(element.publishedAt).toGMTString():"𝘕𝘰𝘵 𝘈𝘷𝘢𝘪𝘭𝘢𝘣𝘭𝘦"}
                source={element.source.name}
              />
            </div>
          ))}
        </div>
          <div className="d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-primary" onClick={this.handlePrevClick}>&larr; Previous</button>
            <button type="button" disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)} className="btn btn-primary" onClick={this.handleNextClick}>Next &rarr;</button>
          </div>
      </div>
    )
  }
}

export default NewsForm
