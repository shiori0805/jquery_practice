


$(function () {
  let searchWord = "";
  let pageCount = 1;
  function displayResult(response) {
    $(".message").remove();
    if (response[0].items && response[0].items.length > 0) {
      $.each(response[0].items, function (index,item){
        let title = item.title || "\u30bf\u30a4\u30c8\u30eb\u4e0d\u660e"
        let creator = item["dc:creator"] || "\u4f5c\u8005\u4e0d\u660e"
        let publisher = item["dc:publisher"] ? item["dc:publisher"][0] : "\u51fa\u7248\u793e\u4e0d\u660e"
        let link = item.link["@id"] || "#";

        let listItem = `
        <li class="lists-item">
          <div class="list-inner">
            <p>\u30bf\u30a4\u30cb:${title}</p>
            <p>\u4f5c\u8005:${creator}</p>
            <p>\u51fa\u7248\u793e:${publisher}</p>
            <a href="${link}" target="_blank">\u66f8\u7c4d\u60c5\u5831</a>
          </div>
        </li>
      `;
      $(".lists").prepend(listItem);
          });
        } else {
          $(".lists").before('<div class="message">)\u691c\u7d22\u7d50\u679c\u304c\u898b\u3064\u304b\u308a\u307e\u305b\u3093\u3067\u3057\u305f\u3002<br>\u5225\u306e\u30ad\u30fc\u30ef\u30fc\u30c9\u3067\u691c\u7d22\u3057\u3066\u4e0b\u3055\u3044\u3002</div>');
        }
        function handleError(error) {
          $(".lists").empty();
          $(".message").remove();
          if (error.status ===0) {
            showErrorMessage("\u6b63\u5e38\u306b\u901a\u4fe1\u3067\u304d\u307e\u305b\u3093\u3067\u3057\u305f\u3002<br>\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u306e\u63a5\u7d9a\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002");
          } else if (error.status === 400) {
            showErrorMessage("\u691c\u7d22\u30ad\u30fc\u30ef\u30fc\u30c9\u304c\u6709\u52b9\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002<br>\uff11\u6587\u5b57\u4ee5\u4e0a\u3067\u691c\u7d22\u3057\u3066\u304f\u3060\u3055\u3044\u3002");
          } else {
            showErrorMessage("\u4e88\u671f\u305b\u306c\u30a8\u30e9\u30fc\u304c\u8d77\u304d\u307e\u3057\u305f\u3002<br>\u518d\u8aad\u307f\u8fbc\u307f\u3092\u884c\u3063\u3066\u304f\u3060\u3055\u3044\u3002");
          }
        }
        $(".search-btn").on("click", function () {
          let inputWord = $("#search-input").val();
        if(inputWord !== searchWord) {
          pageCount = 1;
          searchWord = inputWord;
        } else{
          pageCount++;
        }
        const settings = {
          "url": `https://ci.nii.ac.jp/books/opensearch/search?title=${searchWord}&format=json&p=${pageCount}&count=20`,
          "method": "GET",
        };
          $.ajax(settings).done(function (response) {
            const result = response['@graph'];
            displayResult(result)
              }).fail(function (err) {
              displayError(err)
        });
      });
      $(".reset-btn").on("click", function() {
        pageCount = 1;
        searchWord = "";
        $(".lists").empty();
        $(".message").remove();
        $("#search-input").val("");
      });
    }});
