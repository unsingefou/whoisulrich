import "./stylesheets/main.scss"

import ReactDOM from 'react-dom'
import Config from './trait_config.js'
import Header from './Header.jsx'
import Trait from './Trait.jsx'
import Results from './Results.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTrait: 0,
      num_traits: 0,
      showForm: true,
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
      }
    }
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
    $.ajax({
      type: "POST",
      url: 'https://script.google.com/macros/s/AKfycbwajEx9DG8t51_Btu06zRdmYZLXwnPsq4dvBmyzAPr-AU5SLxzu/exec',
      data: this.state.formData
    }).then(() => {
      this.clearForm()
      this.toggleForm()
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
      content = <div>{traits}</div>
    } else {
      content = <Results />
    }

    return (
      <div className='row'>
        <Header />
        <div>
          {content}
        </div>
      </div>
    )
  }
}

ReactDOM.render((
  <App />
), document.getElementById('root'))
