import { Document, Image, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import { FaCalendarAlt, FaGenderless, FaGlobe, FaIdCard, FaMapMarkerAlt, FaQuestionCircle } from 'react-icons/fa';

function PDFComponent({ datos, logoUrl, preguntas }) {
    const respuestas = datos[0].Respuesta;

    const respuestasMap = respuestas.reduce((acc, respuesta) => {
        acc[respuesta.pregunta_id] = respuesta.respuesta;
        return acc;
    }, {});

    const styles = StyleSheet.create({
        page: {
            padding: 30,
            fontFamily: 'Helvetica',
            position: 'relative',
            minHeight: '100vh',
            backgroundColor: '#f4f4f4',
        },
        header: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 20,
        },
        titleContainer: {
            flex: 1,
            backgroundColor: '#075DA1',
            padding: 15,
            borderRadius: 5,
            color: 'white',
        },
        title: {
            fontSize: 20,
            fontWeight: 'bold',
            color: 'white',
        },
        logoStyle: {
            width: 130,
            height: 50,
            marginLeft: 20,
        },
        profileSection: {
            marginBottom: 20,
            padding: 15,
            backgroundColor: 'white',
            borderRadius: 10,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        profileTitle: {
            fontSize: 16,
            fontWeight: 'bold',
            marginBottom: 10,
            borderBottom: '1px solid #ddd',
            paddingBottom: 5,
        },
        profileItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        },
        profileIcon: {
            marginRight: 10,
            color: '#075DA1',
        },
        profileText: {
            fontSize: 12,
            color: '#333',
        },
        headerLine: {
            borderBottom: '2px solid #075DA1',
            marginBottom: 20,
        },
        content: {
            fontSize: 12,
            color: '#333',
        },
        section: {
            marginBottom: 15,
            padding: 15,
            backgroundColor: 'white',
            borderRadius: 10,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        },
        footer: {
            fontSize: 10,
            color: '#808080',
            position: 'absolute',
            bottom: 30,
            left: 30,
            right: 30,
            textAlign: 'center',
        },
        questionItem: {
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10,
        },
        questionIcon: {
            marginRight: 10,
            color: '#075DA1',
        },
        questionText: {
            fontSize: 12,
            fontWeight: 'bold',
            color: '#333',
        },
    });

    return (
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.header}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>{datos[0].nombres + ' ' + datos[0].apellidos}</Text>
                    </View>
                    {logoUrl && <Image style={styles.logoStyle} src={logoUrl} />}
                </View>
                <View style={styles.headerLine} />

                <View style={styles.profileSection}>
                    <Text style={styles.profileTitle}>Información del Usuario</Text>
                    <View style={styles.profileItem}>
                        <FaIdCard size={16} style={styles.profileIcon} />
                        <Text style={styles.profileText}>Tipo documento: {datos[0].tipo_documento}</Text>
                    </View>
                    <View style={styles.profileItem}>
                        <FaIdCard size={16} style={styles.profileIcon} />
                        <Text style={styles.profileText}>Documento: {datos[0].documento}</Text>
                    </View>
                    <View style={styles.profileItem}>
                        <FaGenderless size={16} style={styles.profileIcon} />
                        <Text style={styles.profileText}>Género: {datos[0].genero}</Text>
                    </View>
                    <View style={styles.profileItem}>
                        <FaCalendarAlt size={16} style={styles.profileIcon} />
                        <Text style={styles.profileText}>Fecha nacimiento: {datos[0].fecha_nacimiento}</Text>
                    </View>
                    <View style={styles.profileItem}>
                        <FaGlobe size={16} style={styles.profileIcon} />
                        <Text style={styles.profileText}>País: {datos[0].pais}</Text>
                    </View>
                    <View style={styles.profileItem}>
                        <FaMapMarkerAlt size={16} style={styles.profileIcon} />
                        <Text style={styles.profileText}>Departamento: {datos[0].departamento}</Text>
                    </View>
                    <View style={styles.profileItem}>
                        <FaMapMarkerAlt size={16} style={styles.profileIcon} />
                        <Text style={styles.profileText}>Ciudad: {datos[0].ciudad}</Text>
                    </View>
                </View>

                <View style={styles.headerLine} />
                <View>
                    {preguntas && preguntas.length > 0 ? (
                        preguntas.map((pregunta, index) => (
                            <View key={pregunta.id} style={styles.section}>
                                <View style={styles.questionItem}>
                                    <FaQuestionCircle size={16} style={styles.questionIcon} />
                                    <Text style={styles.questionText}>{pregunta.pregunta}</Text>
                                </View>
                                <Text style={styles.content}>
                                    Respuesta/ {respuestasMap[pregunta.id] || 'No disponible'}
                                </Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.content}>No hay preguntas disponibles.</Text>
                    )}
                </View>

                <Text style={styles.footer}>Fecha: {new Date().toLocaleDateString()}</Text>
            </Page>
        </Document>
    );
}

export default PDFComponent;
