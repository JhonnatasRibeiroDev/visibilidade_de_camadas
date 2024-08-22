// Função principal que processa todos os documentos abertos
function setVisibilityForAllOpenDocuments() {
    var initialDocument = app.activeDocument; // Documento inicialmente ativo
    var documents = app.documents;

    for (var i = 0; i < documents.length; i++) {
        app.activeDocument = documents[i];
        setLayerVisibility(documents[i]);
    }

    app.activeDocument = initialDocument; // Retorna ao documento inicial
    alert("Visibilidade das camadas ajustada!");
}

// Ajusta a visibilidade das camadas em um documento
function setLayerVisibility(doc) {
    var layers = doc.layers;

    // Torna todas as camadas visíveis
    for (var i = 0; i < layers.length; i++) {
        layers[i].visible = true;
    }

    // Oculta a última camada
    if (layers.length > 0) {
        layers[layers.length - 1].visible = false;
    }
}

// Executa o script para todos os documentos abertos
setVisibilityForAllOpenDocuments();
