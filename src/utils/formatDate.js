export const formatDate = (date) => {
    console.log({ date });

    const splitedDate = new Date(date).toLocaleDateString().split("/")
    console.log(splitedDate);
    splitedDate[0] = (Number(splitedDate[0]) + 1).toString()

    const orderedDate = splitedDate.reverse().join("-")

    return orderedDate
}
export const formateDateToAPI = (dateString) => {
    const dateSplited = dateString.split("-")
    console.log("DATESPLITED: ", dateSplited)
    const newDate = new Date(Number(dateSplited[0]), Number(dateSplited[1]) - 1, Number(dateSplited[2]))
    console.log("NEWDATESPLITED: ", newDate)
}

