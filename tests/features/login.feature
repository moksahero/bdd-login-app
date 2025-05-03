Feature: ログイン機能

  Scenario: 正しい資格情報でログインできる
    Given ログインページを開いている
    When ユーザーが "test@example.com" と "password123" を入力してログインボタンを押す
    Then 「ようこそ」というメッセージが表示される
