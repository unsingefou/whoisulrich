import ReactDOM from 'react-dom'
import Config from './trait_config.js'
import Header from './header.jsx'
import Trait from './trait.jsx'
import Submit from './submit.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrait: 0,
      num_traits: 0,
      show_submit: false,
      formData: {
        name: '',
        height: '',
        weight: '',
        hair_color: '',
        hair_amount: '',
        eye_color: '',
        outfit: '',
        predictor_name: ''
      }
    }
    this.nextTrait = this.nextTrait.bind(this);
  }

  nextTrait(e) {
    e.preventDefault()
    let curTrait = this.state.currentTrait + 1
    this.setState({currentTrait: curTrait})

    if(this.state.currentTrait === 6) {
      console.log(this.state.currentTrait)
      this.setState({show_submit: true})
    }
  }

  onInputChange(field, value) {
    let formData = Object.assign({}, this.state.formData, {
      [field]: value
    })
    console.log(formData)
    this.setState({formData: formData})
    console.log(this.state)
  }

  render() {
    const traits = Config.map((item, index) =>
      <Trait key={index}
        item={item}
        currentTrait={this.state.currentTrait}
        onNext={this.nextTrait}
        index={index}
        onInputChange={this.onInputChange.bind(this)}/>
    )
    console.log(this.state.show_submit)
    let submit = null
    if(this.state.show_submit){
      submit = <Submit formData={this.state.formData} onInputChange={this.onInputChange.bind(this)}/>
    }

    return (
      <div className='row'>
        <Header />
        <div>
          {traits}
          {submit}
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <App />
), document.getElementById('root'))
