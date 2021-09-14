///qr

import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Linking } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
export default function QrCodeReader() {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);
    // カメラへのアクセス権
    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();
    }, []);
    // QRを読み取った時の処理
    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
        console.log (data);
    //QRコード画面遷移必要
        //リアクトjsの書き方window.location.href = data;
        Linking.openURL(data).catch(err => console.error('URLを開けませんでした。', err));
    if(!data) {
        return;
    }


    };
    // ページ処理本体
    // 1. カメラへのアクセス権があるかどうか
    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }
    // 2. カメラへのアクセス権がある場合に、カメラの映像を出す
    return (
        <View
            style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "flex-end"
            }}
        >
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
            />
            {scanned && <Button title={"Tap to Scan Again"} onPress={() => setScanned(false)} />}
        </View>
    );
}
