<div class="contacts_form_window">
    <h2>Заполните форму</h2>
    <form enctype="multipart/form-data" action="/page/form.php" method="POST">
        <div class="contacts_name">
            <input placeholder="Имя" type="text" minlength="2" maxlength="50" name="name"/>
        </div>
        <div class="contacts_phone">
            <input required placeholder="* 8 029 1112233" type="tel" name="phone"/>
        </div>
        <div class="contacts_comment">
            <textarea placeholder="Комментарий" name="comment"></textarea>
        </div>
        <button type="submit" class="button_otpravit">Отправить</button>
        <div class="contacts_text">* Обязательные поля для отправления</div>
    </form>
</div>