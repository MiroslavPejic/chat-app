import { PrettyChatWindow } from 'react-chat-engine-pretty';
import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
    return <div style={{height: '100vh'}}>
        <PrettyChatWindow
            projectId='39502134-f867-4bbc-8746-ee816b1598e0'
            username={props.user.username}
            secret={props.user.secret}
            style={{height: '100%'}}
        />
    </div>
}

export default ChatsPage;