import getRandomInt from "../../helpers/getRandomInt";
export const incrementRandomInt = async(context) => {
    context.commit("isLoad", true);

    try {
        const randomInt = await getRandomInt();
        context.commit("incrementby", randomInt);
    } catch (error) {
        alert("error", error);
    } finally {
        context.commit("isLoad", false);
    }
};