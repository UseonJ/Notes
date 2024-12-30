import { Text } from "../../components/Text"
import { Divider } from "../../components/Divider"
import { Button } from "../../components/Button"

const moveToChineseCharacter = () => {
}

export const MainPage = () => {
    return <div className="main_page_container">
        <Text content="Name : Aron, 정우선" />
        <Button label="한자 뜻 풀이" onClick={moveToChineseCharacter}/>
        <Divider />
        <Text content="" />
    </div>
}