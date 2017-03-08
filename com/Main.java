package com;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.net.ServerSocket;
import java.net.Socket;

public class Main {

    public static void main(String[] args) throws Exception {
        ServerSocket server = new ServerSocket(8088);
        for (int loop = 16;loop >= 0;loop -= 1) {
            Socket socket = server.accept();
            echo(socket, loop == 0);
        }
        server.close();
    }

    public static void echo(Socket socket, boolean last) throws Exception {
        ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
        InputStream inputStream = socket.getInputStream();
        Status status = Status.CH;
        while (status != Status.CTRLCTRL) {
            int value = inputStream.read();
            switch (status) {
                case CH:
                    status = '\r' == value ? Status.CT : Status.CH;
                    break;
                case CT:
                    status = '\n' == value ? Status.CTRL : Status.CH;
                    break;
                case CTRL:
                    status = '\r' == value ? Status.CTRLCT : Status.CH;
                    break;
                case CTRLCT:
                    status = '\n' == value ? Status.CTRLCTRL : Status.CH;
            }
        }
        if (last) {
            socket.getOutputStream().write("Server Close\r\n".getBytes());
        }
        socket.getOutputStream().write(byteArrayOutputStream.toByteArray());
    }
}

enum Status {
    CH, CT, CTRL, CTRLCT, CTRLCTRL
}
