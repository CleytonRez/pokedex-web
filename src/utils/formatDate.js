export const formatDate = (date) => {
    const splitedDate = new Date(date).toLocaleDateString().split("/")
    console.log("SPLITEDDATE: ", splitedDate)

    const orderedDate = splitedDate.reverse().join("-")
    console.log("ORDEREDDATE: ", orderedDate)

    return orderedDate
}

