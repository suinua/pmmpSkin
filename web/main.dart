import 'dart:html';

import 'dart:typed_data';

void main() {
  InputElement file = querySelector('#file');
  file.onChange.listen((e) {
    var fileName =
        file.value.replaceAll('.png', '').replaceAll('C:\\fakepath\\', '');
    convert(e,fileName);
  });
}

void convert(Event event, String fileName) async {
  var files = (event.target as FileUploadInputElement).files;
  var reader = FileReader();
  var resultReceived = reader.onLoad.first;
  reader.readAsDataUrl(files[0]);
  await resultReceived;

  CanvasElement canvas = querySelector('#canvas');
  CanvasRenderingContext2D context = canvas.getContext('2d');
  var img = ImageElement(src: reader.result);
  img.onLoad.listen((e) {
    canvas
      ..height = img.height
      ..width = img.width;
    context.drawImageScaled(img, 0, 0, img.width, img.height);
    var imageData = context.getImageData(0, 0, img.width, img.height).data;
    var skinData = Uint16List.view(imageData.buffer);

    download(fileName + '.skin', skinData);
  });
}

void download(String saveFileName, data) {
  var blob = Blob([data], 'octet/stream');
  AnchorElement downloadLink = querySelector('#download');
  downloadLink.href = Url.createObjectUrlFromBlob(blob);
  downloadLink.text = 'ダウンロード';
  downloadLink.download = saveFileName;
  downloadLink.style.display = '';
}
