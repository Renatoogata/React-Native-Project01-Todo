import { Alert, FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { useState } from "react";
import { Tasks } from "../../components/Tasks";

function Home() {
    const [tasks, setTasks] = useState<string[]>([]);
    const [taskName, setTaskName] = useState('');
    const [totalTasks, setTotalTasks] = useState(0);

    function handleTaskAdd() {
        if (taskName === '' || taskName === ' ') {
            return Alert.alert("Erro", "Porfavor digite no campo acima para registrar")
        }
        setTasks(prevState => [...prevState, taskName])
        setTaskName('')
        setTotalTasks(state => state + 1)
    }

    function handleTaskRemove(task: string) {
        Alert.alert("Remover", "Deseja remover tarefa?", [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks(prevState => prevState.filter(tasks => tasks !== task));
                    setTotalTasks(prevState => prevState - 1)
                }
                ,
            },
            {
                text: 'Não',
                style: 'cancel'
            }
        ])
    }

    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image
                    source={require('../../../assets/Logo.png')}
                />
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Adicione uma nova tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setTaskName}
                    value={taskName}
                />
                <TouchableOpacity
                    style={styles.inputButton}
                    onPress={handleTaskAdd}
                >
                    <Text style={styles.button}>
                        +
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.menu}>
                <View style={styles.menuOption} >
                    <Text style={styles.created}>
                        Criadas
                    </Text>
                    <Text style={styles.total}>
                        {totalTasks}
                    </Text>
                </View>

                <View style={styles.menuOption}>
                    <Text style={styles.finished}>
                        Concluídas
                    </Text>

                    <Text style={styles.total}>
                        0
                    </Text>
                </View>
            </View>

            <View style={styles.taskContainer}>
                <FlatList
                    style={styles.flatListContainer}
                    data={tasks}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Tasks
                            key={item}
                            task={item}
                            onRemove={() => handleTaskRemove(item)}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    ListEmptyComponent={() => (
                        <View style={styles.emptyContainer}>
                            <View style={styles.marginLine}></View>

                            <Image
                                style={styles.imageEmpty}
                                source={require('../../../assets/TaskEmpty.png')}

                            />

                            <Text style={styles.firstText}>
                                Você ainda não tem tarefas cadastradas
                            </Text>

                            <Text style={styles.text2}>
                                Crie tarefas e organize seus itens a fazer
                            </Text>

                        </View>
                    )}
                />
            </View>
        </View>
    )
}

export { Home }