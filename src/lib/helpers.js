export const getDifficultyColorForTag = (difficulty) => {
    switch (difficulty) {
        case "easy":
            return "is-success";
        case "medium":
            return "is-warning";
        case "hard":
            return "is-danger";
        case "all":
        default:
            return "is-light"
    }
};