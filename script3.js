document.addEventListener('DOMContentLoaded', function () {
    const emojiButton1 = new EmojiButton();
    const emojiBlock1 = document.getElementById('emojiBlock1');

    const emojiButton2 = new EmojiButton();
    const emojiBlock2 = document.getElementById('emojiBlock2');

    emojiButton1.on('emoji', selection => {
        twemoji.parse(selection.emoji, icon => {
            emojiBlock1.innerHTML = icon;
        });
    });

    emojiBlock1.addEventListener('click', () => {
        emojiButton1.togglePicker(emojiBlock1);
    });

    emojiButton2.on('emoji', selection => {
        twemoji.parse(selection.emoji, icon => {
            emojiBlock2.innerHTML = icon;
        });
    });

    emojiBlock2.addEventListener('click', () => {
        emojiButton2.togglePicker(emojiBlock2);
    });
});

