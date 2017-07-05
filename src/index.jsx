import ReactDOM from 'react-dom'
import Config from './trait_config.js'
import Header from './header.jsx'
import Trait from './trait.jsx'
import Submit from './submit.jsx'
import Results from './Results.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrait: 0,
      num_traits: 0,
      showSubmit: false,
      showResults: false,
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
      }
    }
  }

  nextTrait(e) {
    e.preventDefault()
    let curTrait = this.state.currentTrait + 1
    this.setState({currentTrait: curTrait})

    if(this.state.currentTrait === 6) {
      this.setState({showSubmit: true})
    }
  }

  prevTrait(e) {
    e.preventDefault()
    if (this.state.currentTrait > 0) {
      let curTrait = this.state.currentTrait - 1
      this.setState({currentTrait: curTrait})
    }
  }

  showResults() {
    this.setState({showResults: true, showSubmit: false})
  }

  onInputChange(field, value) {
    console.log(field)
    console.log(value)
    let formData = Object.assign({}, this.state.formData, {
      [field]: value
    })
    this.setState({formData: formData})
    console.log(this.state)
  }

  render() {
    const traits = Config.map((item, index) =>
      <Trait key={index}
        item={item}
        currentTrait={this.state.currentTrait}
        onPrev={this.prevTrait.bind(this)}
        onNext={this.nextTrait.bind(this)}
        formData={this.state.formData}
        onInputChange={this.onInputChange.bind(this)}/>
    )
    let submit = null
    if(this.state.showSubmit){
      submit = <Submit formData={this.state.formData}
        onInputChange={this.onInputChange.bind(this)}
        showResults={this.showResults.bind(this)}/>
    }

    let results = null
    if(this.state.showResults){
      results = <Results />
    }

    return (
      <div className='row'>
        <Header />
        <div>
          {traits}
          {submit}
          {results}
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <App />
), document.getElementById('root'))
