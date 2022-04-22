import { useAuthContext } from "../../hooks/useAuthContext"
import { useCollection } from "../../hooks/useCollection"


export default function History() {
    const { user } = useAuthContext()
    const { documents, error } = useCollection(
        "transactions",
        // check if uid of the transaction equals the uid of user
        ["uid", "==", user.uid],
        // sort by timestamp
        ["createdAt", "desc"]
    )

    let total = []
    for (let i = 0; i < documents?.length; i++) {
        total.push(documents[i].amount);
    }
    const totalNum = total.map(t => {
        return Number(t)
    })
    const totalCalc = totalNum.reduce((prev, cur) => prev + cur, 0)

    return (
        <div>
            {error && <p>{error}</p>}
            <p>total: ${totalCalc}</p>
            <ul>
                {documents?.map((document) => (
                    <li key={document.id}>
                        <p>{document.amount}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}
