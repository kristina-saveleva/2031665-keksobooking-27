const FILE_TYPES = ['jpg', 'jpeg', 'png'];
const fileChooserAvatar = document.querySelector('#avatar');
const previewAvatar = document.querySelector('.ad-form-header__preview img');
const fileChooserImage = document.querySelector('#images');
const previewImage = document.querySelector('.ad-form__photo img');

fileChooserAvatar.addEventListener('change', () => {
  const fileAvatar = fileChooserAvatar.files[0];
  const fileNameAvatar = fileAvatar.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileNameAvatar.endsWith(it));
  if (matches) {
    previewAvatar.src = URL.createObjectURL(fileAvatar);
  }
});

fileChooserImage.addEventListener('change', () => {
  const fileImage = fileChooserImage.files[0];
  const fileNameImage = fileImage.name.toLowerCase();
  const matches = FILE_TYPES.some((it) => fileNameImage.endsWith(it));
  if (matches) {
    previewImage.src = URL.createObjectURL(fileImage);
  }
});
