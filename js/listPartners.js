const inputPartner = document.querySelector('input[data-input-new-partner]')
const btnAddPartner = document.querySelector('span[data-add-new-partner]')
const wrapperRenderList = document.querySelector('ul[data-list-partners]')
const deleteAllPartners = document.querySelector('div[data-delete-all-partners]')

let listPartners


// EventListeners

inputPartner.addEventListener('input', inputNewPartner)

btnAddPartner.addEventListener('click', addPartner)

deleteAllPartners.addEventListener('click', () => {
	localStorage.clear()
	listPartners = []
	renderListPartners()
})


// Functions

function getListPartners() {
	if (localStorage.getItem('partners')) {
		listPartners = JSON.parse(localStorage.partners)
	}
	else listPartners = []
}

function inputNewPartner() {

	let input = inputPartner.value.trim()

	if (listPartners.includes(input)) {
		// якщо таке ім'я є в списку
		btnAddPartner.classList.remove('enable')
	}

	else {
		// якщо такого імені немає
		if (input == '') {
			btnAddPartner.classList.remove('enable')
		}
		else btnAddPartner.classList.add('enable')
	}
}

function addPartner() {
	let input = inputPartner.value.trim()

	if (btnAddPartner.classList.contains('enable')) {
		listPartners.push(input)
		inputPartner.value = ''
		btnAddPartner.classList.remove('enable')
		console.log(listPartners);

		localStorage.partners = JSON.stringify(listPartners)
		renderListPartners()
	}
}

function renderListPartners() {

	wrapperRenderList.innerHTML = ''

	for (i = 0; i < listPartners.length; i++) {

		const partner = document.createElement('li')
		partner.classList.add('partner')
		wrapperRenderList.append(partner)

		const partnerName = document.createElement('p')
		partnerName.innerHTML = listPartners[i]
		partnerName.classList.add('partner__name')
		partner.append(partnerName)

		const partnerButtons = document.createElement('div')
		partnerButtons.classList.add('partner__buttons')
		partner.append(partnerButtons)


		const partnerBtnEdit = document.createElement('div')
		partnerBtnEdit.classList.add('partner__btn-edit')
		partnerButtons.append(partnerBtnEdit)

		const partnerBtnDelete = document.createElement('div')
		partnerBtnDelete.classList.add('partner__btn-delete')
		partnerButtons.append(partnerBtnDelete)

	}
}

getListPartners()
renderListPartners()


// При запуску список партнерів береться з LocalStorage
// При добавленні нового пратнера LocalStorage обновляється
// При видаленні всіх все повністю очищається



// arr = []

// let input = document.querySelector('.input')
// let out = document.querySelector('.out')
// const btnAdd = document.querySelector('.button-add')

// input.addEventListener('input', () => {
// 	out.innerHTML = ''
// 	let inputWord = input.value.toLowerCase()

// 	let filt = arr.filter(el => el.includes(inputWord))

// 	if (inputWord == '') filt = []

// 	if (filt.length > 0) {
// 		for (i = 0; i < filt.length; i++) {
// 			const elem = document.createElement('div')
// 			elem.classList.add('list')
// 			elem.innerHTML = filt[i]
// 			out.append(elem)
// 		}
// 	}
// 	else {
// 		btnAdd.classList.add('none')
// 	}
// })

