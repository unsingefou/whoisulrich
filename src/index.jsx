import "./stylesheets/main.scss"

import ReactDOM from 'react-dom'
import Config from './trait_config.js'
import Header from './Header.jsx'
import Trait from './Trait.jsx'
import Results from './Results.jsx'
import Spinner from './Spinner.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrait: 0,
      num_traits: 0,
      showForm: true,
      showSpinner: false,
      formData: {
        name: '',
        height: '',
        weight_lbs: '',
        weight_oz: '',
        hair_color: '',
        hair_amount: 'none',
        eye_color: '',
        outfit: '',
        predictor_name: ''
      },
      defaultData: {
        name: '',
        height: '',
        weight_lbs: '',
        weight_oz: '',
        hair_color: '',
        hair_amount: 'none',
        eye_color: '',
        outfit: '',
        predictor_name: ''
      },
      results: []
    }

    this.getResults().then((response) => {
      this.setState({results: response.results})
    })
  }

  nextTrait(e) {
    e.preventDefault()
    if(this.state.currentTrait < Config.length) {
      let curTrait = this.state.currentTrait + 1
      this.setState({currentTrait: curTrait})
    }
  }

  prevTrait(e) {
    e.preventDefault()
    if (this.state.currentTrait > 0) {
      let curTrait = this.state.currentTrait - 1
      this.setState({currentTrait: curTrait})
    }
  }

  toggleForm() {
    this.setState({showForm: !this.state.showForm})
  }

  onInputChange(field, value) {
    let formData = Object.assign({}, this.state.formData, {
      [field]: value
    })
    this.setState({formData: formData})
  }

  clearForm() {
    this.setState({formData: this.state.defaultData})
  }

  onSubmit() {
    this.setState({showSpinner: true})
    $.ajax({
      type: "POST",
      url: 'https://script.google.com/macros/s/AKfycbwajEx9DG8t51_Btu06zRdmYZLXwnPsq4dvBmyzAPr-AU5SLxzu/exec',
      data: this.state.formData
    }).then(() => {
      this.getResults().then((response) => {
        this.setState({results: response.results})
        this.clearForm()
        this.toggleForm()
        this.setState({showSpinner: false})
      }).fail(() => {
        this.setState({showSpinner: false})
      })

    }).fail(() => {
      this.setState({showSpinner: false})
      alert(`Looks like something horrible happened to your prediction, becuase we didn't receive it. You might
      want to try again.`)
    })
  }

  getResults() {
    return $.ajax({
      type: "GET",
      url: 'https://script.google.com/macros/s/AKfycbwajEx9DG8t51_Btu06zRdmYZLXwnPsq4dvBmyzAPr-AU5SLxzu/exec',
    })
  }

  render() {
    const traits = Config.map((item, index) =>
      <Trait key={index}
        item={item}
        currentTrait={this.state.currentTrait}
        onBack={this.prevTrait.bind(this)}
        onNext={this.nextTrait.bind(this)}
        formData={this.state.formData}
        onInputChange={this.onInputChange.bind(this)}
        onSubmit={this.onSubmit.bind(this)}/>
    )

    let content = null
    if (this.state.showForm) {
      content = (
        <div>
          {traits}
          <div className='view-toggle'>
            <a onClick={this.toggleForm.bind(this)}>See what others are predicting</a>
          </div>
        </div>
      )
    } else {
      content = (
        <div>
          <Results results={this.state.results}/>
          <div className='view-toggle'>
            <a onClick={this.toggleForm.bind(this)}>Make a prediction</a>
          </div>
        </div>

      )
    }

    return (
      <div className='row'>
        <Header />
        <div>
          {content}
        </div>
        <Spinner showSpinner={this.state.showSpinner} />
      </div>
    )
  }
}

ReactDOM.render((
  <App />
), document.getElementById('root'))
