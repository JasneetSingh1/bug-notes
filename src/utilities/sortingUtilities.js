export const sortTickets = (tickets, preference) => {
    switch (preference){
        default:
            return tickets

        case "High to Low":
            return [...tickets].sort((a,b) => b.priority.localeCompare(a.priority))

        case "Low to High":
            return [...tickets].sort((a,b) => a.priority.localeCompare(b.priority))
    }
}