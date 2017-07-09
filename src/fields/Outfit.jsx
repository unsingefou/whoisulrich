class Outfit extends React.Component {
  onChange(e) {
    this.props.onInputChange('outfit', e.target.value)
  }

  render() {
    return (
      <div>
        <div className="outfit-selector">
          <input id="space" type="radio" value="space"
            checked={this.props.formData.outfit === 'space'}
            onChange={this.onChange.bind(this)}/>
          <label htmlFor='space' className="drinkcard-cc space"></label>

          <input id="camper" type="radio" value="camper"
            checked={this.props.formData.outfit === 'camper'}
            onChange={this.onChange.bind(this)}/>
          <label htmlFor='camper' className="drinkcard-cc camper" ></label>

          <input id="lion" type="radio" value="lion"
            checked={this.props.formData.outfit === 'lion'}
            onChange={this.onChange.bind(this)}/>
          <label htmlFor='lion' className="drinkcard-cc lion"></label>
        </div>
      </div>
    )
  }
}

export default Outfit
