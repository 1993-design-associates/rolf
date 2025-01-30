// when clicks on "View All", it goes back to the previous page
function backBtnClick() {
    const backBtn = document.querySelector('.back-btn')
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            history.back()
        })
    }
}

export default backBtnClick
