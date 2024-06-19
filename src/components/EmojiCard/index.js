// Write your code here.

import './index.css'

const EmojiCard = props => {
  const {everyDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = everyDetails

  const onClicked = () => {
    clickEmoji(id)
  }

  return (
    <li className="eachList">
      <button type="button" className="emoji-btn" onClick={onClicked}>
        <img src={emojiUrl} alt={emojiName} className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard

/*
import './index.css'

const EmojiCard = props => {
  const {everyDetails, clickEmoji} = props
  const {id, emojiName, emojiUrl} = everyDetails

  const onClicked = () => {
    clickEmoji(id)
  }

  return (
    <li className="eachList">
      <button type="button" className="emoji-btn" onClick={onClicked}>
        <img src={emojiUrl} alt="emojiName" className="emoji-icon" />
      </button>
    </li>
  )
}

export default EmojiCard */
